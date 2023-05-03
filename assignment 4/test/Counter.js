const { expect } = require('chai');

describe('Counter', function () {
  let Counter;
  let counter;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory('Counter');
    counter = await Counter.deploy();
    await counter.deployed();
  });

  describe('add', function () {
    it('should add two numbers correctly', async function () {
      await counter.add(5, 3);
      expect(await counter.total()).to.equal(8);
    });
  });

  describe('subtract', function () {
    it('should subtract two numbers correctly', async function () {
      await counter.subtract(5, 3);
      expect(await counter.subtracted()).to.equal(2);
    });
  });

  describe('multiply', function () {
    it('should multiply two numbers correctly', async function () {
      await counter.multiply(5, 3);
      expect(await counter.multiplied()).to.equal(15);
    });
  });

  describe('divide', function () {
    it('should divide two numbers correctly', async function () {
      await counter.divide(6, 3);
      expect(await counter.divided()).to.equal(2);
    });

    it('should not allow division by zero', async function () {
      await expect(counter.divide(6, 0)).to.be.revertedWith(
        'Division by zero is not allowed'
      );
    });
  });

  describe('getResults', function () {
    it('should return all results correctly', async function () {
      await counter.add(5, 3);
      await counter.subtract(5, 3);
      await counter.multiply(5, 3);
      await counter.divide(6, 3);

      const results = await counter.getResults();
      expect(results).to.deep.equal([8, 2, 15, 2]);
    });
  });
});
