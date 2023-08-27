import React from 'react'

const Message = (props) => {
  return (
    <div>
        <div className="message">
            <p>
              <table style={{border:'2px solid black'}}>
                <tr>
                  <td style={{border:'2px solid black'}}>PATIENT NAME</td>
                  <td style={{border:'2px solid black'}}>STORE ID</td>
                  <td style={{border:'2px solid black'}}>MEDICINE </td>
                  <td style={{border:'2px solid black'}}>DATE</td>
                </tr>
              </table>
            </p>
        </div>
    </div>
  )
}

export default Message

