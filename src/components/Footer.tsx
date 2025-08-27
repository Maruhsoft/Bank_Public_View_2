import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Facebook, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useSiteInfo } from '../hooks/useSiteInfo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { siteInfo } = useSiteInfo();

  const quickLinks = [
    { key: 'personalBanking', label: t('navigation.personalBanking') },
    { key: 'businessBanking', label: t('navigation.businessBanking') },
    { key: 'digitalBanking', label: t('navigation.digitalBanking') },
    { key: 'securityCenter', label: t('navigation.securityCenter') },
    { key: 'aboutUs', label: t('navigation.aboutUs') },
    { key: 'contactUs', label: t('navigation.contactUs') },
  ];

  const legalLinks = [
    { key: 'privacyPolicy', label: t('footer.privacyPolicy') },
    { key: 'termsOfService', label: t('footer.termsOfService') },
    { key: 'accessibility', label: t('footer.accessibility') },
  ];

  const socialLinks = [
    { icon: Facebook, href: siteInfo?.socials.facebook, label: 'Facebook' },
    { icon: Linkedin, href: siteInfo?.socials.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteInfo?.socials.twitter, label: 'Twitter' },
    { icon: Youtube, href: siteInfo?.socials.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">
                {siteInfo?.bankName || 'IBK 기업은행'}
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {siteInfo?.tagline || 'Your Trusted Financial Partner Worldwide'}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>{siteInfo?.compliance.fdic}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>{siteInfo?.compliance.equalHousing}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <div className="space-y-3">
              {siteInfo?.contact.email && (
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a 
                    href={`mailto:${siteInfo.contact.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteInfo.contact.email}
                  </a>
                </div>
              )}
              
              {siteInfo?.contact.phone && (
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a 
                    href={`tel:${siteInfo.contact.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteInfo.contact.phone}
                  </a>
                </div>
              )}

              {siteInfo?.addresses.usHQ && (
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <div className="text-gray-300">
                    <div>{siteInfo.addresses.usHQ.address}</div>
                    <div>
                      {siteInfo.addresses.usHQ.city}, {siteInfo.addresses.usHQ.state} {siteInfo.addresses.usHQ.zipCode}
                    </div>
                    <div>{siteInfo.addresses.usHQ.country}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Media and Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ) : null;
              })}
            </div>

            <div className="space-y-2">
              {legalLinks.map((link) => (
                <div key={link.key}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              {t('footer.copyright', { bankName: siteInfo?.bankName || 'GlobalTrust Bank' })}
            </p>
            
            {siteInfo?.addresses.hongKong && (
              <div className="text-sm text-gray-300 text-center md:text-right">
                <div>Hong Kong Office:</div>
                <div>
                  {siteInfo.addresses.hongKong.address}, {siteInfo.addresses.hongKong.city}
                </div>
                {siteInfo.contact.hkPhone && (
                  <div>Tel: {siteInfo.contact.hkPhone}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;