import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
// import { TokenAmount, TradeType, Trade } from '@uniswap/sdk-core';
import { Route } from '@uniswap/v2-sdk';

const Home: NextPage = () => {
  function performSwap() {
    alert('Swap performed successfully!');
  }
  function performApprove() {
    alert('You have received 200 000 STRK !!! (lol)')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectButton />

        <div className="swap-container">
          <h1 className="swap-title">KykySwap</h1>
          <div className="swap-box">
            <div className="input-group">
              <label htmlFor="token1">You Pay:</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="token1"
                  placeholder="0.0"
                  className="token-input"
                />
                <select name="crypto" id="token1" className="token-select">
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
            </div>

            <div className="swap-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff7856"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="swap-icon-svg"
              >
                <line x1="12" y1="6" x2="12" y2="18"></line>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            <div className="input-group">
              <label htmlFor="token2">You Receive:</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="token2"
                  placeholder="0.0"
                  className="token-input"
                  disabled
                />
                <select name="crypto" id="token2" className="token-select">
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
            </div>

            <button className="swap-button" onClick={performSwap}>
              Swap
            </button>
            <button className="approve-button" onClick={performApprove}>
              Approve
            </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .swap-container {
          max-width: 400px;
          width: 100%;
          background-color: #fff;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .swap-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
          text-align: center;
          color: #ff7856
        }

        .swap-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px;
        }

        .token-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .token-select {
          border: none;
          outline: none;
          font-size: 16px;
          background-color: transparent;
        }

        .swap-icon {
          display: flex;
          justify-content: center;
          margin: 8px 0;
        }

        .swap-icon-svg {
          color: #ccc;
          cursor: pointer;
        }

        .swap-button {
          background-color: #ff7856;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .approve-button {
          background-color: #ff7856;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .swap-button:hover {
          background-color: #dd4563;
        }
        .approve-button:hover {
          background-color: #dd4563;
        }
      `}</style>
    </div>
  );
};

export default Home;