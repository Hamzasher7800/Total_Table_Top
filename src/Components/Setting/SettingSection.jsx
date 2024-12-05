import React, { useState } from 'react';
import AccountSetting from './Tabs/AccountSetting'; // Import the AccountSetting component
import PrivacySetting from './Tabs/PrivacySetting'; // Import other components
import OtherSetting from './Tabs/OtherSetting';
import DisplaySetting from './Tabs/DisplaySetting';

function SettingSection() {
  const [activeTab, setActiveTab] = useState('General');

  // Array of tabs with the actual React components as content
  const tabs = [
    { name: 'Privacy', content: <PrivacySetting /> },
    { name: 'Display', content: <DisplaySetting /> },
    { name: 'Account', content: <AccountSetting /> },
    { name: 'Other', content: <OtherSetting /> },
  ];

  return (
    <div className="text-white">
      {/* Tab Buttons */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-2 border-b border-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 flex-shrink-0 ${
              activeTab === tab.name
                ? 'bg-[#0D2539] text-[#ffffff]'
                : 'border-gray-600 text-gray-400'
            } hover:border-[#f3c15f] hover:text-[#ffffff] transition`}
            onClick={() => setActiveTab(tab.name)} // Set active tab when clicked
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[950px] rounded-md">
        {/* Dynamically render the component based on the active tab */}
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name}>
                <div>{tab.content}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default SettingSection;
