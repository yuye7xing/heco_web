import React, { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import Context from './context';
import useGoFarm from '../../hooks/useGoFarm';
import { Vault } from '../../go-farm';
import config, { vaultDefinitions } from '../../config';

const Vaults: React.FC = ({ children }) => {
  const [vaults, setVaults] = useState<Vault[]>([]);
  const goFarm = useGoFarm();

  const fetchPools = useCallback(async () => {
    const vaults: Vault[] = [];
    // const balance = await goFarm.getAllBalance();
    const apys = await goFarm.getVaultApys();
    const GOTapy = await goFarm.getGOTApy();
    // const balance = await goFarm.getVaultTVLs();
    const price = await goFarm.getVaultTVLPrice();
    const GOTprice = await goFarm.getGOTTVLPrice();
    // console.log('price',price)

    for (const vaultInfo of Object.values(vaultDefinitions)) {
      vaults.push({
        ...vaultInfo,
        address: config.MasterChef,
        depositToken: goFarm.externalTokens[vaultInfo.depositTokenName],
        earnToken: goFarm.externalTokens[vaultInfo.depositTokenName],
        apy:BigNumber.from(10000000),
        balance:BigNumber.from(0),
      });
    }
    vaults.sort((a, b) => (a.sort > b.sort ? 1 : -1));
    setVaults(vaults);
  }, [goFarm, setVaults]);

  useEffect(() => {
    if (goFarm) {
      fetchPools().catch((err) => console.log(`Failed to fetch pools: ${err.stack}`));
    }
  }, [goFarm, fetchPools]);

  return <Context.Provider value={{ vaults }}>{children}</Context.Provider>;
};

export default Vaults;
