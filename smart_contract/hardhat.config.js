require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9JunV3olFxeo3PDq_K-pibMeY_VGSCul',
      accounts: [
        '0efd1c0a3a32795a20b16a66309a7bfb6adfef61b66ce6002783cde364d7c202',
      ],
    },
  },
}