import React, { useEffect, useState } from 'react';
import './Settings.css';
import { getSettings } from '../api';

const Settings = () => {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsData = await getSettings();
        setSettings(settingsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch settings:', error);
      }
    };

    fetchSettings();
  }, []);

  if (loading) {
    return <div className="settings"><h1>Loading...</h1></div>;
  }

  return (
    <div className="settings">
      <h1>Settings</h1>
      <ul>
        {settings.map(setting => (
          <li key={setting.id}>
            <h3>{setting.setting}</h3>
            <p>{setting.description}</p>
            <p>Status: {setting.value ? 'Enabled' : 'Disabled'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
