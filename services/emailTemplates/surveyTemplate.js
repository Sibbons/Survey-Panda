const keys = require('../../config/keys')
module.exports = (survey) => {
    return `
    <html>
    <body>
        <div style="border-style: solid; border-color: gray; text-align center">
    
            <h3>Dear Recipient,</h3>
    
            <p style="padding-top: 30px">We are conducting a survey based on the following question below.
            </p>
    
            <p>${survey.body}</p>
    
            <div style="display:inline">
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="color: white">
                    <button type="button">
                        Yes
                    </button>
                </a>
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="color: white"">
                    <button type=" button" margin-left: 50px">
                    No
                    </button>
                </a>
                <p style="margin-top: 30px">Thank you for your time
                    <br />
                    <div style="margin-left: 20px; padding-top: -20px;font-weight: 700">-Sibbons Shrestha </div>
                </p>
    </body>
    </html>
    
    `;

};