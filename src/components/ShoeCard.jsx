
const ShoeCard = ({ imgURL, ChangeBigShoeImage, bigShoeImage }) => {

    const handleClick = () => {
        // console.log(bigShoeImage)
        if (bigShoeImage !== imgURL.bigShoe) {
            ChangeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div
            className={`border-4 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent cursor-pointer max-sm:flex-1'}`}
            onClick={() => handleClick()}
        >
            <div className="flex items-center justify-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
                <img
                 src={imgURL.thumbnail} 
                 alt='Shoe Collection'
                 width={127}
                 height={103}
                 />
            </div>

        </div>
    )
}

export default ShoeCard
