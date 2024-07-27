import { SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';
import { FooterColumn } from './footer-column/footer-column';
import { CgFacebook } from 'react-icons/cg';
import { FaLinkedinIn } from 'react-icons/fa6';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col px-4 xl:px-8">
        <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-3 md:gap-12 lg:grid-cols-6 lg:py-16">
          <FooterColumn
            title="Categories"
            links={[
              'User Interface',
              'User Experience',
              'Digital Media',
              'Lifestyle',
            ]}
          />
          <FooterColumn
            title="Product"
            links={['Pricing', 'Overview', 'Browse', 'Accessibility']}
            badge="Beta"
            badgeIndex={2}
          />
          <FooterColumn
            title="Solutions"
            links={['Brainstorming', 'Ideation', 'Wireframing', 'Research']}
          />
          <FooterColumn
            title="Resources"
            links={['Help Center', 'Blog', 'Tutorials', 'FAQ']}
          />
          <FooterColumn
            title="Support"
            links={[
              'Contact Us',
              'Developers',
              'Documentations',
              'Integrations',
            ]}
          />
          <FooterColumn
            title="Company"
            links={['About', 'Press', 'Events', 'Request Demo']}
          />
        </div>
        <div className="flex w-full flex-col gap-y-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-x-8 gap-y-3 text-xs sm:flex-row">
            <p>Flowt @ 2024</p>
            <p className="cursor-pointer hover:underline">Terms of Service</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Manage Cookies</p>
          </div>
          <div className="flex flex-col gap-y-8 sm:flex-row sm:items-center md:gap-x-8">
            <div className="flex gap-x-4">
              <SiYoutube className="size-4 cursor-pointer transition hover:text-white/75" />
              <CgFacebook className="size-4 cursor-pointer transition hover:text-white/75" />
              <SiTwitter className="size-4 cursor-pointer transition hover:text-white/75" />
              <SiInstagram className="size-4 cursor-pointer transition hover:text-white/75" />
              <FaLinkedinIn className="size-4 cursor-pointer transition hover:text-white/75" />
            </div>
            <div className="flex gap-x-4">
              <Image
                src="/assets/app-store.png"
                alt="App Store"
                width={119.66}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/assets/google-play.png"
                alt="Play Store"
                width={135}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
