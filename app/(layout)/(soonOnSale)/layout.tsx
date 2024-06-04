const SoonOnSale = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <section
        className='relative col-span-4 mb-16 h-[330px] w-full rounded-ui bg-center'
        style={{
          backgroundImage: 'url(image.png)'
        }}
      >
        <div className='absolute bottom-[30px] left-[30px]'>
          <span className='font-kharkiv text-xl'>Скоро в продаже</span>
        </div>
      </section>

      {children}
    </>
  );
};

export default SoonOnSale;
