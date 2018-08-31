// Write a function called "greetCustomer".

// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 

// The greeting should be different, depending on the name on their reservation.

// Case 1 - Unknown customer ( Name is not present in customerData ): 

// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'

// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

'use strict';

var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3
    },
    'Carrie': {
      visits: 4
    }
  };
  
  function greetCustomer(firstName) {
    var greeting = '';
      
    // your code here
      
    return greeting;
  }

  
