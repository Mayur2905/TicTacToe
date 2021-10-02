import React from 'react'

export const History = ({history,moveTo,currentMove}) => {
    return (
        <div className="history-wrapper" >
        <ul className="history">
            {
                history.map((_,move) => {
                    return <li key={move}>
                        <button 
                        className={`btn-move ${move === currentMove ?'avtive':''}`}
                        type="button"
                         onClick={()=>{
                            moveTo(move);             
                        }}>
                            { move === 0 ? `Go to game start ` : `Go to move #${move}`}</button>
                    </li>
                })
            }
            
        </ul>
        </div>
    );
};
export default History;
