import Image from 'next/image'

const Footer = ({toTopHandle}) => {
    return (
        <div className="h-fit w-full flex-col p-10 bg-gradient-to-t from-tilia-dark from-10% via-ixorafrom-tilia-dark via-70% to-[#2e281f] to-90% lg:px-40">
        <div className='flex justify-center relative bottom-12'>
          <img src="/up-to-top.png" className="w-16 h-16 cursor-pointer animate-bounce" onClick={toTopHandle} alt="up-to-top-btn" />
        </div>
        <div className='flex justify-center items-center'>
          <div className='md:flex md:justify-center'>

            <div className='md:text-center'>
              <div className='text-orange-500 font-mono text-xl'>Ixora Luxury Residence</div>
              <div className='p-3 text-white font-mono text-sm'> Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша</div>
            </div>
            <div className='md:text-center'>
              <div className='text-orange-500 font-mono text-xl'>Контакти</div>
              <div className='p-3'>
                <div className="py-2 flex space-x-3 items-center">
                  <Image
                    src="/green-phone.svg"
                    alt="Phone Ring"
                    className="bg-transparent animate-pulse"
                    width={20}
                    height={8}
                  />
                  <div className="text-sm text-white"><a href={`tel:00359886879993`}>00359886879993</a></div>
                </div>
                <div className="py-2 flex space-x-2 items-center">
                  <Image
                    src="/email.svg"
                    alt="Email"
                    className="bg-transparent animate-pulse"
                    width={20}
                    height={8}
                  />
                  <div className="text-sm text-white"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
}

export default Footer;