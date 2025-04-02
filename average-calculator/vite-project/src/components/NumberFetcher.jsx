import React, { useState } from "react";
import axios from "axios";

const NumberFetcher=()=>
     {
    const [numtype,setnumtype]=useState("p");
    const [response,setResponse]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const fetchNumbers=async()=>{
        setLoading(true);
        setError(null);
        try 
        {
            const res=await axios.get(`http://localhost:9876/numbers/${numtype}`);
            setResponse(res.data);
        } catch (err) {
            setError("Failed to fetch data and  ples tyr again.");
        } finally
        {   setLoading(false);
        }
    };
    return (
        <div className="container">
            <h2>average Calculator</h2><br />
            <label>Select Number Type:</label>
            <select value={numtype} onChange={(e) => setnumtype(e.target.value)}>
                <option value="p">prime number</option>
                <option value="f">fibonaci numbrr</option>
                <option value="e">even Number</option>
                <option value="r">random Number</option>
            </select><br />
            <button onClick={fetchNumbers} disabled={loading}>
                {loading ? "Loading..." :"feetch numbers"}
            </button>
            {error&&<p className="error">{error}</p>}
            {response&&(
                <div className="response-box">
                    <h3>Results:</h3><p><strong>previous window:</strong> {JSON.stringify(response.windowPrevState)}</p>
                    <p><strong>current window:</strong> {JSON.stringify(response.windowCurrState)}</p>
                    <p><strong>fetched numbers:</strong> {JSON.stringify(response.numbers)}</p>
                    <p><strong>average is:</strong>{response.avg}</p>
                </div>
            )}
        </div>
    );
};
export default NumberFetcher;
