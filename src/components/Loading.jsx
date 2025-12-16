import { Oval } from 'react-loader-spinner'
import styles from "./Loading.module.css"

function Loading() {
  return (
    <div className={styles.loader}>
    
      <Oval 
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
     
    </div>
  );
}

export default Loading;
