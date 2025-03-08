export const NavBar = () => {
  return (
    <div className='w-72 h-screen bg-bgNavBar border-borderColor border-r-2'>
      <div className='logo_div w-full flex justify-left items-center border-b-2 border-borderColor h-20'>
        <img className='ml-3 w-44 ' src="/images/logo.svg" alt="Logo" />
      </div>
        <form className='search_div flex justify-center items-center'>
        <input
          className="search_input bg-inputBgColor border-2 w-full m-3 pl-2 border-inputBorderColor h-11 rounded-lg transition-shadow  focus-visible:outline-none focus-visible:shadow-custom"
          type="text"
          placeholder="Search"
        />
        </form>
        <div className="line bg-borderColor w-64 h-px"></div>
        <div className='friends_div'>
            {localStorage.getItem('friends') ? (<div></div>) : (<div className='flex justify-center mt-44'><h3 className='text-lg text-center'>You don't have any friends yet.</h3></div>) }
        </div>
    </div>
  )
}
