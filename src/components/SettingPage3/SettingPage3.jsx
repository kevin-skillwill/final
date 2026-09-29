import React, { useState } from 'react';

export default function SettingPage3() {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    console.log({
      isTwoFactorEnabled,
      currentPassword,
      newPassword,
    });
    alert('ცვლილებები წარმატებით შეინახა!');
  };

  return (
    <div className="bg-white rounded-[25px] p-8 w-[1110px] shadow-sm font-['Inter']">
      {/* Tabs */}
      <div className="flex border-b border-[#E6EDF5] mb-8">
        <button className="pb-4 px-2 text-[#718EBF] font-medium hover:text-[#1814F3] transition text-base">
          Edit Profile
        </button>
        <button className="pb-4 px-8 text-[#718EBF] font-medium hover:text-[#1814F3] transition text-base">
          Preferences
        </button>
        <button className="pb-4 px-8 text-[#1814F3] font-medium border-b-2 border-[#1814F3] text-base">
          Security
        </button>
      </div>

      <form onSubmit={handleSave}>
        {/* Two-factor Authentication */}
        <div className="mb-8">
          <h3 className="text-[17px] font-medium text-[#333B69] mb-4">
            Two-factor Authentication
          </h3>
          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isTwoFactorEnabled}
                onChange={(e) => setIsTwoFactorEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#16DBCC]"></div>
            </label>
            <span className="text-[16px] font-normal text-[#232323]">
              Enable or disable two factor authentication
            </span>
          </div>
        </div>

        {/* Change Password */}
        <div className="mb-10">
          <h3 className="text-[17px] font-medium text-[#333B69] mb-4">
            Change Password
          </h3>

          <div className="grid grid-cols-1 gap-5 max-w-[510px]">
            <div>
              <label className="block text-[16px] font-normal text-[#232323] mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="**********"
                className="w-full h-[50px] px-4 rounded-[15px] border border-[#DFEAF2] text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3] placeholder:text-[#718EBF]"
              />
            </div>

            <div>
              <label className="block text-[16px] font-normal text-[#232323] mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="**********"
                className="w-full h-[50px] px-4 rounded-[15px] border border-[#DFEAF2] text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3] placeholder:text-[#718EBF]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
            <button
              type="submit"
              className="w-[190px] h-[50px] bg-[#1814F3] text-white text-[18px] font-medium rounded-[15px] hover:bg-[#100dc4] transition shadow-md"
              >
               Save
            </button>
        </div>
      </form>
    </div>
  );
}