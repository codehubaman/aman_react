import React from 'react'

// const Card = ({ username = "hii", newObj = { age: 24 }, meraob }) => {
const Card = (props) => {
    return (
        <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
            <div>
                <img
                    src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
                    alt="test"
                    width="300"
                    height="300"
                    className="rounded-t-xl w-full"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl  items-center">
                <div className="flex flex-col items-center">
                    <h1 className=" flex-col font-RubikBold text-centre pb-4">Bored ape nft accidental {props.username}</h1>

                    <h1 className="font-bold font-RubikBold text-right mb-5"> Price {props.newObj && props.newObj.age}</h1>
                    <h1 className="font-bold font-RubikBold text-left mb-5"> age {props.meraob && props.meraob.age}</h1>
                    <h1 className="font-bold font-RubikBold text-centre mb-5"> address {props.meraob && props.meraob.address.city}</h1>


                </div>
                <div className="flex flex-col justify-between items-center font-mono">
                    <p className="text-left">#345</p>
                    <p className="text-right">0.01</p>
                </div>
            </div>
        </div >
    )
}

export default Card
