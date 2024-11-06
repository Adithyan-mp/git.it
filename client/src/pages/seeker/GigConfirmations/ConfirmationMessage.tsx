import React from 'react';
import AcceptanceButtons from './AcceptanceButtons.tsx';

const ConfirmationMessage: React.FC = () => {
    return (
        <section className="flex flex-col self-end mt-32 text-2xl font-semibold max-md:mt-10 max-md:max-w-full">
            <p 
                className="text-black max-md:max-w-full" 
                style={{ 
                    marginLeft: '-300px', // Adjust the left position here
                    marginTop: '20px'
                }}
            >
                Congratulations! Your application has been approved. We're excited to have you on board for this gig. Looking forward to working with you—let's make this a success together!
                <br /><br /><br /><br /><br /><br />
                <span 
                    className="confirm-text" 
                    style={{ 
                      position: 'relative', // Change position to relative
                      top: '-80px', // Use top to move it up
                      left: '-25px'
                    }}
                >
                    Please click 'Accept' to confirm the gig
                </span>
            </p>
            <AcceptanceButtons />
        </section>
    );
};

export default ConfirmationMessage;
