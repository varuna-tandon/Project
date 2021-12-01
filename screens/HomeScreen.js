import React, { Component } from 'react';
import { StyleSheet, Text, View,FlatList, ImageBackground, ActivityIndicator ,Button,Image} from 'react-native';
import Profile from './Profile';

class HomeScreen extends Component{
constructor(props){
  super(props);
  this.state = {
    data : [],
    page : 1,
    isLoading : false

  }
}

componentDidMount(){
  const apiUrl = "https://api.punkapi.com/v2/beers?page=2&per_page=80"
fetch(apiUrl).then(res => res.json())
.then(resJSON=> {
  this.setState({data : resJSON })
})
}

renderView = ({item}) => {
return(
  <View
  style = {{
      flexDirection:'row',
  justifyContent : 'space-around',
  alignItems:'center',
  height : 200,
  width :400,
  backgroundColor : 'green'
  }}>
  <View style = {{padding : 10,margin: 10}}>  
    <Image style = {{width: "30%", height: 120 }} 
    source = {{uri:item.image_url}}/>

   
    <Text style = {{color:'white'}}>{[item.name]}</Text>
    </View>  
    <Button title = 'Details' onPress = {() => {this.props.navigation.navigate(Profile)}}/>

  </View>
)
}

handleLoadMore = async() =>{
await this.setState({page : this.state.page + 1,isLoading : true})
const apiUrl = "https://api.punkapi.com/v2/beers?page=2&per_page=5"+ this.state.page
fetch(apiUrl).then(res => res.json())
.then(resJSON=> {
  this.setState({data : this.state.data.concat(resJSON),isLoading : false })
})
}

footerList = ()=>{
  return(
  <View>
    <ActivityIndicator loading={this.state.isLoading} size ='small'/>
  </View>
  )
}

render(){
  return(
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
    <FlatList 
    style = {{flex:1}}
    data = {this.state.data}
    renderItem = {this.renderView}
    keyExtractor= {(item,index) => index.toString()}
    onEndReached= {this.handleLoadMore}
    ListFooterComponent = {this.footerList}


    ></FlatList>
    </View>
  )
}
} 








export default HomeScreen;
