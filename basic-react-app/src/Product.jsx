import "./Product.css";
import Price from "./Price";


function Product({title,idx}){
let oldPrice=["12,495","11,900","1,599","599"];
let newPrice =["8,999","9,199","899","278"];
let Description = [
["8,000 DPI","5 Programmable Buttons"],
["inutitive Surface","Designed for IPad Pro"],
["Designed for IPad Pro","inutitive Surface"],
["Wireless","Optical orientation"],
];
return(
<div className="Product">
<h4>{title}</h4>
<p>{Description[idx][0]}</p>
<p>{Description[idx][1]}</p>
<Price oldPrice={oldPrice[idx]}newPrice={newPrice[idx]} />
</div>
);
}

export default Product;