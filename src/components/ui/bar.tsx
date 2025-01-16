import High from '../../img/icons/high.png';
import Low from '../../img/icons/low.png';
const Bar = ()=>{
    return (
        <div className="flex">
            <div className="flex flex-col items-center">
                <img src={High.src} alt="High" />
                <p>High</p>
            </div>
            <div>
                <input type='range' min='0' max='100' className='w-[200px]' />
            </div>
            <div className="flex flex-col items-center">
                <img src={Low.src} alt="Low" />
                <p>Low</p>
            </div>
        </div>
    )
}

export default Bar;