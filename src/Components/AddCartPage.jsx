import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia"
import { IoBagRemove } from "react-icons/io5"
import { MdRemoveShoppingCart } from 'react-icons/md'
import { AiOutlineArrowLeft, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai"
import { useGlobalContext } from '../Context/Contextapi'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCartPage = () => {
    const {ShoppingcartDetails,totalPrice,qty,dispatch} = useGlobalContext()
    const Removed = (cardList) => {
        toast.warn('Item removed !', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch({
            type: "ROMOVE_PRODUCT",
            payload: {
                id: cardList.id,
                cardList,
            }
        })
    }

    const PaymentHandle = (token) => {
        console.log(token);
        toast.success('Payment Seccess ', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch({
            type: "PAYMENT_SUCCESSFUL",
        })
    }

    return (
        <>
            <div className='Addcart_list  flex justify-center items-center'>
                <Link to='/'><div className='ContinueShopping absolute  left-6 flex items-center justify-center mx-3 p-3 '>
                    <AiOutlineArrowLeft className='continueArrow' />
                    <h1>Continue Shopping</h1>
                </div></Link>
                {ShoppingcartDetails?.length === 0 ?
                    (<div>
                        <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' />
                    </div>)
                    :
                    (<div id='Addcart' className='flex justify-center items-center flex-col  p-5 '>
                        {ShoppingcartDetails?.map((cardList) => {
                            return (
                                <div key={cardList.id}>
                                    <div id='Addlist' className='flex gap-10 justify-center items-start flex-wrap my-4'>
                                        <div className='w-14 border p-1 bg-white'>
                                            <img src={cardList.Img} alt='ProductImg' />
                                        </div>
                                        <div>
                                            <p>{cardList.title}</p>
                                            <p>{cardList.discriptions}</p>
                                        </div>
                                        <div className='flex'>
                                            <button onClick={() => dispatch({
                                                type: "QUANTITY_MINUS",
                                                payload: {
                                                    id: cardList.id,
                                                    cardList
                                                }
                                            })} disabled={cardList.qty <= 1 ? true : false}><AiOutlineMinusSquare className='hover:text-red-500' /></button>

                                            <p className='border  bg-white w-10 text-center mx-2'>{cardList.qty}</p>

                                            <button onClick={() => dispatch({
                                                type: "QUANTITY_PlUS",
                                                payload: {
                                                    id: cardList.id,
                                                    cardList
                                                }
                                            })}>
                                                <AiOutlinePlusSquare className='hover:text-green-500' />
                                            </button>
                                        </div>
                                        <div className='flex items-center'>
                                            <LiaRupeeSignSolid />
                                            <p className=' text-lg'>{cardList.Price * cardList.qty}</p>
                                        </div>
                                        <div onClick={() => Removed(cardList)} className='rounded-full p-2  bg-white '>
                                            <IoBagRemove className='removeBtn text-red-700 cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='w-4/5 m-auto border  '></div>
                                </div>

                            )
                        })}
                        <div className='AllTotal flex justify-around w-full m-auto my-5 items-center bg-white p-2 '>
                            <h1>TotalPrice: {totalPrice}</h1>
                            <h1>Total-Items: {qty}</h1>
                            <button className='' onClick={() => dispatch({ type: "REMOVE_ALL" })} ><MdRemoveShoppingCart className='RemoveAll' /></button>
                        </div>
                        <StripeCheckout
                            label='Checkout'
                            stripeKey="pk_test_51O7urWSAJhOnKKa3mV1YR1T2D4jiXLUo2bxdshpofRupFw0iR5XV4zV3ddmz8RSVz2gpbhFWPN9jnFkgmP9H26ri000Nm7TJjV"
                            token={PaymentHandle}
                            billingAddress
                            shippingAddress
                            amount={totalPrice * 100}
                            name='MirrorStore'
                            currency="INR"
                            description='Secure Payment'
                            image="./contentImg/Icon.png"

                        >
                        </StripeCheckout>
                    </div>
                    )
                }
            </div>
            <ToastContainer />
        </>
    )
}

export default AddCartPage