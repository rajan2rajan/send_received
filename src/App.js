
function App() {

const getProvier =  () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      console.log("Connected!! to Phantom Wallet")
      return provider.connect();} 

    }else{
      window.open("https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en","blank");
      }
      
}; 
  return (
    <div>
     
         <label>send</label>
        <button type = "submit" value="send">send</button><br></br>

        <label >connect_wallet</label>
        <button value="connect_wallet" onClick={getProvier}> submit</button>
      
    </div>

  );
}

export default App;
