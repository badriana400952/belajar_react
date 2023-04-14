import React, { useState } from 'react';

const LatihanState = () =>{

    // const [ubah, setUbah] = useState(0)
    //      console.log("ubah yahhh => " ,ubah)
    // const [ubahmakanan, setUbahmakanan] = useState("nasi")

    // const [cari, setCari] = useState('')

    // console.log(cari)

    // const [makanan, setMakanan] = useState(['nasi', 'ayam'])
    
    // const [tulis, setTulis] = useState('')

    // const tambahMakanan = () => {
    //     setMakanan ([...makanan, tulis ])
        
    // } 

   
        // latihan wkwkwk alhamdulilah berhasil
    const [makanan, setMakanan] = useState(['nasi', 'ayam'])
    const [cari, setCari] = useState('')


    const mak = () => {
        setMakanan ([...makanan, cari])
    }









   
    return(
        <>
        
         {/* <h1 className='text-center'>ini adalah nilai atate { ubah }</h1>
        
         <button  onClick={()=> setUbah(ubah + 1)}>klik ubah</button>
        
         <br/> <hr/>
         <h1  className='text-center'>ini adalah untuk merubah makanan {ubahmakanan}</h1>

          <button onClick={() => setUbahmakanan(ubahmakanan => "tahu")}>ubah makanan</button>
         <br/><br/> <br/><hr/> */}
        {/* 
        <p>{cari}</p>

        <input type="text" onChange={(e) => setCari(e.target.value) }/> 
        
         <h1>tambah makanan</h1>
        {
            makanan.map((makan) => 
                <p>{makan}</p>
            )
        }
        <input type="text" onChange={(e) => setTulis(e.target.value)}/>
        <button onClick={() => tambahMakanan()}>tambah makanan</button> */}






            <h2>nama makanan</h2>
            {
                makanan.map((menu) => 
                    <p>{menu}</p>
                )
            }

            <input onChange={(e) => setCari(e.target.value)}/> 
            <button onClick={() => mak()}>tambah makanan</button>





























        </>
    )
}

export default LatihanState
