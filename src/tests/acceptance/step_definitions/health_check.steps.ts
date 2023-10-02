import { When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';
import config from 'config';

let response: AxiosResponse | null = null;
const port = config.get('port');

When('I make a GET request to {string}', async (route: string) => {
  response = await axios.get(`http://localhost:${port}${route}`);
});

Then('I should receive a {int} OK response', (statusCode: number) => {
  if (response === null) {
    throw new Error('No response received');
  }
  expect(response.status).to.equal(statusCode);
});
