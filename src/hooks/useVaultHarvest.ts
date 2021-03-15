import { useCallback } from 'react';
import useGoFarm from './useGoFarm';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Vault } from '../go-farm';

const useVaultHarvest = (vault: Vault) => {
  const goFarm = useGoFarm();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      goFarm.vaultHarvest(vault.id),
      `从 ${vault.depositTokenName} 收获 ${vault.depositTokenName}`,
    );
  }, [vault, goFarm,handleTransactionReceipt]);

  return { onReward: handleReward };
};

export default useVaultHarvest;
