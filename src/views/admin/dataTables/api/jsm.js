const fetch = require('node-fetch');

const serviceDeskId = 'BS';
const queueId = '4';
const accessToken = 'ATCTT3xFfGN0gmJSdrzqJYhcsjhPmXksmmHVCrBadm0XYePBd1qgK6HV_zD-2ZuzpFeUAffWnRPnYshRzqQV2isj6jLmvahNhlHagi7VUJs2ys52Y9cpKXpP8zLLbzh85icbPxQs6xhrNE3Ja6ktKVB3kfc2Gv-dB4C1WEcsdN4O3RTNQN0-gD4=6B56EECC';

const apiUrl = `https://bmaissaude.com.br/rest/servicedeskapi/servicedesk/${serviceDeskId}/queue/${queueId}/issue`;

async function fetchJSMData() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  fetchJSMData,
};
