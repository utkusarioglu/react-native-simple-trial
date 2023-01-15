import { ethers } from "ethers";

const INFURA_API_KEY = "62fe7a0486ba4dc4ba5db2110e8451a4";
const NETWORK = "homestead";

class EthereumService {
  private provider = new ethers.providers.InfuraProvider(
    NETWORK,
    INFURA_API_KEY,
  );

  public doThings(onBlock: (e: number) => void) {
    this.provider.on("block", e => onBlock(e));
  }
}

export default new EthereumService();
