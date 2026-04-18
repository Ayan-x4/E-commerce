

const Banner2 = (props) => {
  return (
    <div className="flex  items-center justify-center  md:rounded-2xl  rounded-xl overflow-clip cursor-pointer border-2 border-white  hover:border-[#008ECC] duration-1000">
    <div className="md:h-[200px] h-[150px]  md:w-[430px] w-[367px]  flex items-center cover">
    <img src={props.img} alt="hhh"
    className="h-full w-full "></img>
    </div>
    </div>
  )
}

export default Banner2
