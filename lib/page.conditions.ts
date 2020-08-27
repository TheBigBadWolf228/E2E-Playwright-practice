import {wait} from './helpers';
import * as chalk from 'chalk';
import {initStepDeclarator} from 'assertior';
declare const allure;

const {ALLURE} = process.env;

function allureStep(stepAssertionName: string, error, expected, current) {
  const step = allure.startStep(stepAssertionName);
  if (expected) {
    allure.attachment('Expected value', JSON.stringify(expected, null, 2), 'application/json');
  }
  if (current) {
    allure.attachment('Current value', JSON.stringify(current, null, 2), 'application/json');
  }
  if (error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
  }
  step.step.stepResult.status = error ? 'broken' : 'passed';
  step.endStep();
}

async function allureInterfaceStep(stepName, cb) {
  const step = allure.startStep(stepName);
  try {
    const result = await cb();
    if(result) {
      allure.attachment('Step result', JSON.stringify(result, null, 2), 'application/json');
    }
    step.step.stepResult.status = 'passed';
    step.endStep();
    return result;
  } catch(error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
    step.step.stepResult.status = 'broken';
    step.endStep();
    throw error;
  }
  
}

if(ALLURE) {
  initStepDeclarator(allureStep);
}


function decoratePage(page) {
  const name = page.id || page.__proto__.constructor.name;

  Object.getOwnPropertyNames(page.__proto__)
      .filter((property) => !!Object
          .getOwnPropertyDescriptor(page.__proto__, property).value)
      .filter((property) => property !=='constructor' )
      .filter((property) => typeof page.__proto__[property] === 'function')
      .forEach((property) => {
        const originalProp = page.__proto__[property];
        page.__proto__[property] = async function(...args) {
          let message = `${name} execute ${property}`;
          if (name.includes('Fragment')) {
            message = `\t${message}`;
          }

        async function currentCall(...args) {
          await wait(this.page).waitVisibility(this.rootSelector);
          return originalProp.call(this, ...args);
        }

          if(ALLURE) {
            return allureInterfaceStep(message, currentCall.bind(this, ...args));
          }

          console.log(chalk['green'](message));
          
          return currentCall.call(this, ...args)
        };
      });
}

export {
  decoratePage,
  allureInterfaceStep
};
