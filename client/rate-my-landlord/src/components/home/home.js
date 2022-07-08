import React, { useState } from 'react';
import { Checkbox, Dropdown, Menu, Rate, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './home.css'
import moment from "moment";
import { CaretDownOutlined, CloseOutlined } from '@ant-design/icons';


export const Home = () => {
  const [data, setData] = useState([{
    id:"111",
    name: 'John Doe',
    picture: './',
    properties: 'Property 1 Property 2 Property 3',
    city: 'Troy,NY',
    zipcode: '12345',
    rating: 2.5,
    quality: 4.2,
    maintenance: 5.0,
    friendliness: 3.5,
    location: "Troy NY,Albany NY",
    reviewed: new Date("2020-10-22")
  }, {
    id:"222",
    name: 'Zohn',
    picture: './',
    properties: 'Property 1 Property 2 Property 3',
    city: 'Troy,NY',
    zipcode: '12345',
    rating: 4,
    quality: 4.0,
    maintenance: 5.0,
    friendliness: 3.5,
    reviewed: new Date("2020-11-22")
  }, {
    id:"333",
    name: 'Doe',
    picture: './',
    properties: 'Property 1 Property 2 Property 3',
    city: 'LA',
    zipcode: '12345',
    rating: 1.5,
    quality:3.6,
    maintenance: 5.0,
    friendliness: 3.5,
    reviewed: new Date("2020-11-10")
  }, {
    id:"444",
    name: 'WOK',
    picture: './',
    properties: 'Property 1 Property 2 Property 3',
    city: 'NJ',
    zipcode: '12345',
    rating: 3.5,
    quality:5.0,
    maintenance: 5.0,
    friendliness: 3.5,
    reviewed: new Date("2020-08-06")
  }]);

  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")



  const locations = [
    "Troy,NY",
    "LA",
    "NJ",
    "DC",
  ]


  const [searchValue, setSearchValue] = useState([]);

  const navigate = useNavigate();


  let list = [...data];
  console.log("filter",filter,sort);
  list = list.filter(item=>((!filter || item.city===filter) && item.name.indexOf(searchValue)!==-1)).sort((a, b) => {
    if(sort==="name"){
      return a[sort].localeCompare(b[sort]);
    }else if(sort==="rating"){
      return  b[sort] - a[sort];
    }else if(sort==="reviewed"){
      return  b[sort].getTime() - a[sort].getTime() ;
    }
    return a[sort] - b[sort]
  });


  const menu = (
    <Menu
      items={[
        {
          label: (
            <div onClick={()=>{
              setSort("name")
            }}>
              Name
            </div>
          ),
        },
        {
          label: (
            <div onClick={()=>{
              setSort("reviewed")
            }}>
              Reviewed
            </div>
            
          ),
        },
        {
          label: (
            <div onClick={()=>{
              setSort("rating")
            }}>
              Rate
            </div>
            
          ),
        },
      ]}
    />
  );
  return (
    <div className='home-container'>
      <div className='home-content'>
        <img alt='' className='home-content-top' src={require("../../assets/image/top.png")}></img>
        <div className='search-bar'>
          <span onClick={() => {
            let imgInput = document.getElementsByName("cover");
            imgInput[0].click();
          }}>{list.length} Results</span>
          <input className='input-type' onKeyPress={(e)=>{
            // if(e.nativeEvent.keyCode === 13){ 
            //   this.set
            // }
          }} value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value);
          }} />
          {/* <input style={{marginTop:30}} type="file" name="cover" accept="image/*"/> */}
          <Dropdown overlay={menu}>
            <Space>
              {sort||'Sort'}
              <CaretDownOutlined color='#304445' />
            </Space>
          </Dropdown>
        </div>
        <div className='list'>
          {
            list.map((item,i) => {
              return <div className='list-item' key={item.id} onClick={()=>{
                navigate("/reviews", {state: item});
              }}>
                <div className='list-item-left'>
                  <div className='list-item-left-top'>
                    <span className='list-item-name' style={{marginRight:10}}>{item.name}</span>
                    <Rate disabled defaultValue={item.rating} />
                  </div>
                  <div className='list-item-left-center'>
                    Quality: <span className="score" style={{ color: "rgb(136,165,106)" }}>{item.quality}</span>| Maintenance: <span className="score" style={{ color: "rgb(102,157,126)" }}>{item.maintenance}</span>| Friendliness: <span className="score" style={{ color: "rgb(199,170,96)" }}>{item.friendliness}</span>
                  </div>
                  <div className='list-item-left-bottom'>
                    Locations: {item.city}
                  </div>
                </div>
                <div className='list-item-right'>
                  <div className='list-item-right-top'>
                    Last Reviewed:
                  </div>
                  <div className='list-item-right-bottom'>
                    {moment(item.reviewed).format("MM-DD-YYYY")}
                  </div>
                </div>
              </div>
            })
          }
          <div className='filters'>
            <div className='filter-caption'>Filter</div>
            {
              locations.map((item,i) => {
                return <div className='filter-item' key={i}>
                  {item === filter ? <div className='checkbox-checked' onClick={() => {
                    setFilter("");
                  }}>
                    <CloseOutlined style={{ fontSize: 15, fontWeight: "bold" }} />
                  </div> : <div className='checkbox' onClick={() => {
                    setFilter(item);
                  }} />}
                  <div className='filter-name'>{item}</div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}