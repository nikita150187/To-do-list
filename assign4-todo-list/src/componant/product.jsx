
import paintingPic1 from "../assets/product-1.jpg";
import paintingPic2 from "../assets/product-2.jpg";
import paintingPic3 from "../assets/product-3.jpg";
import paintingPic4 from "../assets/product-4.jpg";
import paintingPic5 from "../assets/product-5.jpg";

import "../componant/product.css";

export function Product1(props){

return(
    <div className="product">
    <img src={paintingPic1} alt="painting" className="img"/>
     <h1 className="product-title">{props.productName1}</h1>
     <p className="product-info">Beauty of the women expracing through the painting.</p>
     <p className="product-price">Price {props.productPrice}$</p>
    </div>
    
);
}

export function Product2(props){

    return(
        <div className="product">
        <img src={paintingPic2} alt="painting" className="img"/>
         <h1 className="product-title">{props.productName2}</h1>
         <p className="product-info">Beauty of the women expracing through the painting.</p>
         <p className="product-price">Price {props.productPrice}$</p>
        </div>
        
    );
    }
    export function Product3(props){

        return(
            <div className="product">
            <img src={paintingPic3} alt="painting" className="img"/>
             <h1 className="product-title">{props.productName3}</h1>
             <p className="product-info">Beauty of the women expracing through the painting.</p>
             <p className="product-price">Price {props.productPrice}$</p>
            </div>
            
        );
        }
        export function Product4(props){

            return(
                <div className="product">
                <img src={paintingPic4} alt="painting" className="img"/>
                 <h1 className="product-title">{props.productName4}</h1>
                 <p className="product-info">Beauty of the women expracing through the painting.</p>
                 <p className="product-price">Price {props.productPrice}$</p>
                </div>
                
            );
            }
            export function Product5(props){

                return(
                    <div className="product">
                    <img src={paintingPic5} alt="painting" className="img"/>
                     <h1 className="product-title">{props.productName5}</h1>
                     <p className="product-info">Beauty of the women expracing through the painting.</p>
                     <p className="product-price">Price {props.productPrice}$</p>
                    </div>
                    
                );
                }