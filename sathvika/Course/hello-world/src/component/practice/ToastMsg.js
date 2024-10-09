import { useState } from "react";

export default function ToastMsg() {
    const [toast, setToast] = useState(false);

    const handleToast = () => {
        setToast(true)
        setTimeout(() => {
            setToast(false);
        }, 3000);
    }

    const styles = {
        toast: {
          position: 'fixed',
          bottom: '20px',
          left: '700px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
        }
    };

    return (
        <div >
            <h1>Displaying a Toast Message</h1>
            <button onClick={handleToast}>toast</button>
            {toast&&<p style={styles.toast}>Toast Message</p>}
        </div >
    );
}