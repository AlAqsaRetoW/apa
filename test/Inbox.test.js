const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());

// updated ganache and web3 imports added for convenience

// contract test code will go here

class Cat {
    talk() {
        return 'meow';
    }

    eat() {
        return 'nyawm';
    }
}

describe('Cat test', () => {
    it('can talk', () => {
        const cat = new Cat();
        assert.equal(cat.talk(), 'meow');
    })
})

/*
mocha functions

it          | menjalankan test dan assert
describe    | mengelompokkan 'it' functions
beforeEach  | mengeksekusi general

*/