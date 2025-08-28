import { useState, useEffect } from 'react';

interface SiteInfo {
  bankName: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    hkPhone: string;
  };
  addresses: {
    usHQ: {
      address: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    hongKong: {
      address: string;
      city: string;
      region: string;
      country: string;
    };
    london: {
      address: string;
      city: string;
      postCode: string;
      country: string;
    };
  };
  socials: {
    facebook: string;
    linkedin: string;
    twitter: string;
    youtube: string;
  };
  externalUrls: {
    login: string;
    signup: string;
  };
  compliance: {
    fdic: string;
    equalHousing: string;
    nmls: string;
  };
  smartsupp: {
    key: string;
  };
}

export const useSiteInfo = () => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSiteInfo = async () => {
      try {
        const response = await fetch('/data/site-info.json');
        const data = await response.json();
        setSiteInfo(data);
      } catch (error) {
        console.error('Failed to load site info:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSiteInfo();
  }, []);

  return { siteInfo, loading };
};