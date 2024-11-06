import React, { useState } from 'react';
import ProfileHeader from './ProfileComponents/ProfileHeader';
import ProfileCard from './ProfileComponents/ProfileCard';
import ActionButton from './ProfileComponents/ActionButton';
import StatCard from './ProfileComponents/StatCard';
import WalletCard from './ProfileComponents/WalletCard';
import HomeButton from './ProfileComponents/HomeButton';
import Modal from "../../../components/Modal"; // Import the modal component
import UserRegistration from "../../ProfileChanger/UserRegistration"; // Import the registration component
import ChangePassword from '../../ChangePassword/ChangePassword'; // Import ChangePassword component

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // State for modal content

  const actionButtons = [
    {
      text: 'Profile details',
      onClick: () => {
        setModalContent(<UserRegistration />); // Render UserRegistration in the modal
        setIsModalOpen(true);
      }
    },
    {
      text: 'Change Password',
      onClick: () => {
        setModalContent(<ChangePassword />); // Render ChangePassword in the modal
        setIsModalOpen(true);
      }
    },
    { text: 'Get Help!', onClick: () => {} },
    { text: 'Log Out', onClick: () => {}, isSemiBold: true },
  ];

  return (
    <main className="flex flex-col items-center pb-12 bg-white">
      <div className='w-full'><ProfileHeader /></div>
      <div className="mt-[45px] w-full max-w-[1305px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <ProfileCard
              name="DINIL K.K"
              phone="+91 9037606592"
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/229a7a48ff546230b3e3a3e261211f8436190a1500c018d9d3102ee781300981?placeholderIfAbsent=true&apiKey=2b8e8d0d538b4a70b2c4e5c985b10841"
            />
          </div>
          <div className="ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
              {/* No of Gigs and Wallet Section */}
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                  <StatCard label="No of gigs" value="6" />
                </div>
                <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                  <WalletCard balance="2500.00" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-6 mt-12 text-3xl leading-tight text-center text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {actionButtons.slice(0, 2).map((button, index) => (
                  <ActionButton key={index} {...button} />
                ))}
              </div>
              <div className="flex flex-wrap gap-6 mt-12 text-3xl leading-tight text-center text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {actionButtons.slice(2).map((button, index) => (
                  <ActionButton key={index} {...button} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Profile Editing or Changing Password */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent} {/* Dynamically render modal content */}
      </Modal>

      <HomeButton />
    </main>
  );
}

export default ProfilePage;
