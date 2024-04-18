
import { useState } from 'react';
import './App.scss';

function App() {
  

  const [mode, setMode] = useState(true)


  return (
  <div hieght={700} className= {mode == true ? 'App container light' : 'App container dark'}>
    <div className='nav'>
      <a className='logo' href="#">Navbar</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='sign'>Sign in</button>
    </div>
  <section className='hero'>
    <div className='hr'>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam ab enim magnam distinctio, doloribus omnis, consequatur quidem quos quae porro. Sapiente aperiam ad incidunt impedit, perferendis aliquam laboriosam officia!
      Quos esse adipisci totam non, cupiditate, vitae rerum optio beatae eius ut laudantium id consectetur voluptate debitis provident quasi dicta sapiente dolor? Nemo, quo accusantium sint iste dolorem facere. Magni?</p>
      <button className='sign'>more</button>
      </div>
  </section>
 
<h1 className={mode == true ? 'title light' : 'title dark'}>Salom</h1>
 <button className={mode == true ? 'btn end' : 'btn start'   }  onClick={()=> setMode(!mode)}>
  <img className={mode == true ? 'rotate' :'rotate2' } width={70} src={mode ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AAAAEBAT8/Pzy8vL5+fmfn5+mpqbZ2dmampoVFRXu7u7d3d0ICAjHx8fl5eUeHh6vr6/Pz89cXFy1tbVRUVFCQkIzMzNvb2+IiIg4ODi8vLxpaWklJSVXV1dMTEySkpJ8fHwsLCwVOsVbAAAKWElEQVR4nO1dh7arKhANQWMvUWPs7f8/8oElTUSMED33udetJ8awZWaYBjmdDhw4cODAgQMHDhw4cODAgQMHfgNbPcGtx8AN8XXrEfACPJlFJW89Ck6AJ/t+c/4VOYMKAN7Wg+AFKQbg8q/ImdoAUEtbj4ITAoDgbD0KPsBSdgb21sPgA+cOzmdQ/BvWLEXzcgaWuvU4WKDKJ0h76qqOJwYA/y/YM9+kvSqrBVZ/zKeiXrgLSPdp1YaGrZWIB54Y9NtXvJ0b6NSNJl5xUi26g5bLuZM0UNaKvWM+sLIA4ceOqkXF3QKvaPm4SRal5k4JST7J77qWzYPCG5v2f+4926OrBk9eCIAy+rksXWv3OR3vvJLKlvZo2eBJw6Mjv+ZUpQ4+0BTXnYoYAkSuCrAmlxnnErpPJq4fGI83/mZ8iz7KK/EoNcoVgYvtGZawYhv3jP2xpa2iTxnnFle9Y9MYtKtEQnKYVBRWrV6HNP8eSWI7M8GJ7vYIA0wDJjJO1pLJU9pFao5tWiJtlAWQ04I6vBZ4aHbT2dua9tCNCJPZKNkET9c8YxJwWesXj5KWfJEVfMlWXqatg5jpQrPsF0J3vG6+3g9dkW20vKQA5GxCEfQeMXKIaSYAa1Ylb6IxHhYbJt8JafbD9bpQrpMv2H/bgoyHXd1iLpeCR2aGL36Ke6WYv7RpNlEZ89ZZp1kYafLq3oNcm16a1DLeQmWMrJWcOf2XzDR684jPbSBpS2RZkmsF/l7MpNjC46IbJ1kNqhsAD+V/evpufPGIAhrYP6cC5Wun0uFYwofBOHYVl/ko7nr8O4yqwBzJm7GBlHm9GpTjz27JmErlv2o9Gfmt1rbPX2KFmSQj2YiIa33OyBj4VT0p6mDTzJJcDePJxnYJQjVOKBQ+0fjppiGlM+ixNWXMzHReyFpo3sZBvnQfhqLTjFmK9H8QtjcL0HtpSa1sHeXDLjXBQAabZqQ9OprA86fy3MvI3iyefIUDmMh0ix9UtUxHbN7mpaz3wQQhegoNfWb6FcdQ7m+zktfqbiow9su4dLYAIL29vCe5bK0pT8jFizq7Adub7OZJZk9dC8pr7pGVDK7v94+gMPfTtCD5r2aWlQyOaHoPkxab/RpBA87LxaytI7cId1SwfDhliwwAgnfv5CwTObqFCPIvyZh+u8QwT6WMTZ5Y5ZJq8E6G7gG8QgOz6dlX2OJTgV74NZluTlmlDCq1aAveWtg3Muy2SW0XTtbrpboUbSmc7CPcmgwBxmgl1GKVMjNn1q5vYbufsSMhOJsCDujIZUDSJ6FIR6ycyRr49OUJYfMUbBR+VowGCoeymdhWLSdcQ8ZATt18+aODFCF9FFs0N8EI4QJPS9NJTQ1EtCGT0P7GZxrjCXoS8BXwFLg+68UKFgG2ys+XwC0WI7Cbs5PUsObIpKQ1NCLlTHUJZBgS5w8UrPmxa5fRFblupgQu9NrRB2zGwZlul9DRA0HOGbptTSITEmUBrnASpbQcbq5fhrnkzionkSGXAaGpxXH1hUMieZeoC7G7ZJtf2UKWG4PEhWwBYOrj7F95XfZADTuOwiEqH8ogiR9f2fomloCoMuQGcdwng8eSsC6SCKoSh/d+SnoyQ1dgHvqXlK+gXchkCI2X8iPlGTMPwa6HBM4o+9kiYw82WBCTPoMQbOJNMMOLbLXoDpIT96npTzZuxj0BegcEoM+tPz5I7kMXjHBhHdy5Rs1bG52VFxcRgQ15Ys6EfIsTDa8uWYV6GErxvHsZdzfnbpnJZBDGxjmw+pbRr5JkTvVIGIqKAuRJMp9yhoZTd69kX9b3ClwEOYNEWETjTZK5j7Xc0fzk7n/ZBQ9PqtUuM+ISNJ+5jBcQAg/Z8ezvG6xhhsWUOS21HBOWGSOcNJxfKG77FhuTEbhfK6IUwrknUhxcrrbFZTSjKSZY0Xl/Ks4BuAJjs2kyaMJ4r2sQhWci25soM3MGJe9PUwFQBKbNKTNz5h+uO2UisiOQpjNoreb8aVD5whNiB50M382VEClNxfOGn5ghU3BVVxRGCM1n0taZ86JKDRPEbgaoZprH2jTNboriM7jSxQw5z3+Fyam1/HTkwap02U8xHc8MuP2hg0lmqJz31RUzg9mZAfrCpN+GKOfZkBPPe8ScbcaY8UH2M3HaLBXkcc5uDUi9XTCyWchYGuX5w1NQ3MN4D5v9521za9LS0/Q2C7lNv4oMVFgBrXkquG8pnZ4bu+1VE1zgZwOD0uBf7nQ04KHXLRDtgAycTgM+Zwb/kUwbaH0vYnYy89eORgoSe8qFV4vbTeMT+ax8IlI2z6PDzSYaAYiLMMY+fB7cbcYwMfiSkHPVjjyeVe+ejQIeZEBCTnLypbhqweo3ADLhLr5/WVlVJXjstmaZHl1wQCArYF2h0yZ1zxCpYM+mcCjOwFoY0doW6VGP5jQb/BtX1QWR8W7snXhToFScSGyo53+sAAzQ6nte+6DUYpbGO0reHj/OmZjtgrc6USdR6mdkNIqDWwM4wriGrQu4voxiE1sbpoFErUgNjpojeVHXJMTBWH5uBpjjgssdes0vNeBUDQBtLMLjnnj/DOvC+UDIqWXEVPzhCY2bD5YDygWzE/CcH+R6rj0ZDwmqofn6cENK0LQEwaiFfp4LlrU1sT9WOUd79NWh+/EqeGZfyFkbteX+93LuRLh963FIAuV0wWUwrcWChuam2xF8+25xSIdIaiATczP29XKteUGW9h2XlJIBfP4tG3b99lzw7CzpyZuBM5umoeOe2aYxHAhCDK+7n0FJUr0aL2xvpwUih5yWnFsGONWtuQDnqAo8U5o8+wfKkuOlcd1d/PZO3B/MdRVmTgaQeAxarN9i7Wp7qvN+aovkqKp31Sp/uHrEJ0+5+uIesV+bkczr0KykvGV1dXlCi7OyTKzn1WMyC/ZSsAAfqbTGCKxCybuT1lhn0VaBfzOtylB6EoML9+BVPgWjUzx/A1/A6WfIPltvRzD9At3hh0IQT7XtC+QiaAM+bI+8+y0Z0KxNyEzD/LUR0EVuduz2oP9kdrBANxeebsyYTfI4xlswLAu5l7I4LvjGXv4jk4YTikJPccUCbIe/MgKaLLafDsoneWki7VvEXeQjuIaFtzGNT8niiDPSl3bDxi/quu16I5IM85mwPGDEuljFCXEu5lf1dvnSzI/oa+hR12H4s+6BIRfE1ifAhr7E02jOL5m0jlrU75njRqb/jpCS7dRxnmTgUDXhh+5eGx1SJ3u1xduqWdt90YkUNHwnJ2pT7Vu1DXWH/1vDV+J8hW63OcDdq1t3P6l+N6AVM9R5rvjYlG2+6eAVgZ+vmJcOeoj7uODGZCBypaEdrXM+3VAxupttDTwC2a5vX2ei7pGyg7bHN6iX+m2Ic2I3pNNvVbqP5ro3QCmt/MfBC9T15/HarQ7UHVJpITm24rO6oHoSp+ZeTtclAzrq9TJf/7BqxXP2cyLtNKBsGGYc+RO1wzCqU8OY+JaAvQLNkZlq/t3Ve+S3+qqqe/1Stq/xt2blwIEDBw4cOHDgwIEDBw78X/Efv79z5ztxOCcAAAAASUVORK5CYII=' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAD8/Pz5+fnz8/Pt7e3a2trHx8fh4eG4uLjU1NQgICDq6uosLCzOzs4aGhp8fHybm5uvr69MTEzAwMCJiYlCQkI8PDxZWVmQkJBeXl5RUVFHR0dmZmZxcXGpqakMDAw1NTU6VoR3AAALBElEQVR4nO1d55qqMBBdqaEXAUGkvf9LXkWEdBASWO6356+FDCRTzhR+fv7whz/84Q8LoRiGcvQaREFtbrdGPXoVgmB4l4tnHL0KMVCayxPN/7HR9OwlTKcfvQ4hMC89zKPXIQTVW5jqf9hn7mUAOHolAlB8hEmPXsl2KN5HmOD8pia5jLCOXstm3Cdh8qPXshXAmYQJzu4FhBcI4dGr2Ya39f/g5h69nk1oHFiYIDp6PVug1RcElXb0ijbAvKHCdMnRK1oPpWhRYS7peR00kGOyXMrzauc4wIVpm6PXtBZ6iMtyudRn1c6mRwrjnDRGUyNSlsulOKd2BiVNmMcpVYBi0WT5DTSNHsf2l/sDt/4fVF/SNJodx2KZnadeytLkK01kE3p5gP/Nv7hJmgl2t9Xeknt1s3zDqwVDlku4PHw2mrrXiK3QiPvxXkdQpkvvq0bRywOWPmA/LYen+1i7biqacSVdZS26TQlDkicWeQGqVXXf/WIxFGgtQRYt0AVUvTzcj/lfa1EGHznBCjBFlhOEc4fHZssyz9QaIao8RDNuAF/QPdF49yvFvw+Dp5wULbnj3xfNhSqk1bg1gL3del0WeN2jzKu6eqKu8vLRef0tZ0fPGmhuxIVq4WbWpNxhLzVdxoX0Oq/CKDaBPqoLVQdmHIVVXjNsoOKaKU0HivdNdSLQesGpY0a6UgWMJeuArg0VI64d2jVy8ZkdJaZd6GnP8sIUsA0Us8jxGHtALMGZMzL6tZ6HJ7Q23jzdCsmjMiCT4Waz/ZPn4bk3G8IUrbmz3YVLISV5YFJ39IA2Wr0ZlIixv3pICk1pIf2E+2pjAAi7AiOUlNi1WE79C+nqfabxDGwgK6kDKvY1ww2sixuy71IlLRPK3NxlTD+lquYCw7DNJDFtwwCuxvhazHJLW3lUu/2gX7Km3T7Vta0ora+jovKudRpZtksTCDBi7IctTRiFqgJaCnukgCSqqabjVkcJIDWfRtDSPUKJ7EdCsQc3MlhzrZRnObx7ahFHTI0pv/BkZg1UUoteCTsAooojybDKKiIMe3IlvnaXmm1vcL1T4pwAKB48DT4ieBT4SfNxNRDIpdl17J6X+AGNOp45R9B2uKqyMWk8yZVQqIOGp1t8nsdDgYM9VwOVppArCxo+X1FZ+P4OHZi3YiDnRnrpEOQF3JD7qpjkAV6AKxoN+VCgUcmW5ccfr4W6TVozq8Lo8NDoIZl26lc87jqMphA5vnqxSIfREBTIVhuzOjf5svx8wmfEOLvhYiVGokW81NHNiHcQZtDOd3gBHH96ERDf2H1bZtl6uYfSa2cHNjB05uYbIAyM3R+bYpeklPHaUUiUzA0Vl+EO/Z3yOjbtPunCF7OBZMBXmBcSMGXr1rJ4DArsBL4Sl1ZeDpgdVxN5cQwXZBnGOgR7aK8Z2Ez27lvcDnoaE1xGvLsGR5eiKESAswHBwSUCLIpjHSTSFwvA5e9WYD2TKABc+nkFjqx50gWe/jdYSbUd4M+v7lvsEMPQoW30lWk4rFjYEC/L5XJUORonlbYeshkZBlSB9nLCXi1DCjBhh4NWGSAAsHZ2TQrHLgKqX9wzWHUKCWNIQIGNXt3uhS/+UelN3TNaE72kCDaYHzjTs+irPLO6EWt8jOIxLH0Shlu3tAWTgzaUrDqPQpiOU5LKG4mk6V+pVcsiMPFxo+5vvSoRcXjcAmYqnemJb2ZkWJj67HR4J3vFtnBH0RLMyOejgebUYG6EN10Du2EVv8aNB81oCCp8qnw1JJ3/59Mft7JKKMxrY6zwdxSQ0Gq/olGYRIrJfCEYE5m0bgIvpeV3uQ/Fb+hOpDX+T7OBXOZj6rFhVOBXjb/88bhWyirHmsyz4BgTxsSgsZyMjJKupsLmJYsnGyA8LptQT2thfserolnCQLPqjLd/JrZeQizzwZQxI2p2IbRZbfF2m9pc+TqqnYSRZmZgQwP4B9O5sifAsMowJwSjMCqnonwrynGFYFZlWizNps36wc4ojLYqG7sM13H3gFljFrJ2mmLNqdtf92RadnEN0hlB/e3vOjMzHSNakrLKi3tMTvMu2oxHmbR5mszaTqMJ2XZmorV2sTNsYs4LF3ZZ6UnB4sN/iQfwKJLl0admxPRtFO/rm9FtRRV/6Torup9S9OLxXrOT+vqKoEZ1yV6Wet94hjiYt4Zar7oMJrbbyn0jTcyYVVszHjrSyhZMnreASgY6pvoGF75yFolgnNSkvo2nffK7d2BnxgigvdWJKC5QsaN8OCJTsl5KDuCFyX4MyszJI1soSwvisI8+IV9I0qHxpiv0jatZGIsvb9TMqMpgJ1WS2YTKTrQwqyJTTvpJBTZ8BiUkAV+AE4Gazei2Ey+bFEvjHDTSTYo+O2qcE49uWI2jxiCS7Ol2fDH5QDAkqIDjqmfmGZBvweQndgBt5s8WeIcVaPy8mqvECrNblSkVhlDG6eCBYUoj0HI6Rw8LEqkDjjz9b7A767+FlF75L5EI2mjOMcMPNSuC81aCXDTYKXPjebJSkCwp1iMiJLCBq+dfHSw71Z7aL0IAsQgCqNoa+rt+JkS7i2Pz7p8JkBhqszQ1/Bz8npTZpX/GfR/4EmlG2qigkT6tYfyes0cx/WegVg1vNJ3eNL4MLdJBN9KYe4zc7D5rQMZBadH6bkB0KNfo7i0YtrUVU5YBnVaqWh1tpfPo0OwXlIqUX34Opf889GrrnE7MuYSDCukz0REes0PDD2VFQIDpLL+DP5Tt36AGMsO7xq9fnZzgineto46e5NciuFhoecVDw7hcLE5Q4l1mPlZc4MnVzsSwlis+QsuN7os8T+ce4Usl2tYlDmr5IesMn8iIkT2gCbs5UbqwwQkyxSKDiVymg2ZRCIyOHKClm1HNm25SRyaRONIiygP1JL6xgs76tZTZUIrrNyE1bMvCxqfM3mNMeZDICfqMqDKn6VBFB34chfmnJrr18jCKfUDNFRuM6hVcXQoEMwy7RYw5f6qm6S4wbNsArq5pKmN+YMTsXJWmAniDyLZMu+JNE1g/Nm0G3Nq69dQKn+CR1PHM7/xd/2j4Yx4k9QhzC0w2EHh8IjGQQtrweOUbv5B17p8t+vSwN6SMqzeYF3wUWzPCmsksCrvcJPjOakO/Vls1IioOFLupGJG3hBc+6tTQywkTxsFXDcbJdQ3G4kASUg9PKb5FmDbm24uYVWwgz8oqbRIDngpsJE1alVnOUnyaEdFcOuEqQCH1Z2ZxWnN629EGjtd1j/L6RPnoOs8J+q3EHj6taBTfWfhbBYk0ec33mrgRNH/Mv0/YM9FeAGKl24wYgYeDWyMw5z2CAu2uEPxKMRX66+4eL9DEHD8um/+1Ft876Bdi9dnoL7eP0Nz6XoBFEZdqho/x8Yj1nYdT6SxowRmgdQxR4NJIPuyochY/y+V4v0ujC63lR1FhBj/p8k0DrDedIPZdGk/l9Ij8r6wXq1b4u8SL7kcP0UMCNNP8toyNFaZ8+/4ZFZh75QQ5YKgAGcPk5YN8ZdsLOCN7EtBVAIP6+PXwKRGQd9L3nFFVgKxh8vJhEdr5N4yXWwmSaKNynycBkQHZZzimHODk9O2sx/8FvDWpOqlefiNGVIBz2leD9tCQfZYd72NtAsIFSM4eSwfcN+6cWC+/AVFU9/lv/3JAHb0nfgP1B91HFu/EBvODMRA49VvbB7gfYc76xmYEgxdQz3/zBBhaho7sJhGHd7t1eXLrP+A9ouCcpAwJ8NTO3VFdfqKhWnm+7C28pwD4X57LH/7wh1+Lf8QqknJ908tFAAAAAElFTkSuQmCC' } alt="" />
 
 </button>
  </div>
  );
}

export default App;