import Link from 'next/link'

const FOOTER_LINKS = [
  {
    id: 'general',
    links: [
      { href: '/', text: 'Home' },
      { href: '/gallery', text: 'Gallery' },
    ]
  },
  {
    id: 'social',
    links: [
      { href: 'https://www.linkedin.com/in/benson-yan-622413201/', text: 'LinkedIn' },
      { href: 'https://x.com/ch3mson', text: 'Twitter' },
      { href: 'https://www.youtube.com/@Ch3mson', text: 'Youtube' },
      { href: 'https://www.facebook.com/benson.yan.520/', text: 'Facebook' },
    ]
  },
  {
    id: 'other',
    links: [
      { href: 'https://github.com/ch3mson', text: 'GitHub' },
      { href: 'https://www.ebay.ca/usr/1_800_benson', text: 'Ebay' },
      { href: 'https://leetcode.com/u/Chemson/', text: 'Leetcode' },
      { href: 'https://www.kaggle.com/chemson', text: 'Kaggle' },
      { href: '/Benson_Yan_2024_Resume.pdf', text: 'Resume' },
    ]
  }
]

const Footer = () => {
  return (
    <footer className='bg-background/30 relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
            {list.links.map((link) => {
              const { href, text } = link

              return (
                <Link 
                  key={href} 
                  href={href} 
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  {text}
                </Link>
              )
            })}
          </div>
        ))}
      </div>
      <div className='mt-20 text-sm'>
        <div>&copy; {new Date().getFullYear()} Benson Yan</div>
      </div>
    </footer>
  )
}

export default Footer