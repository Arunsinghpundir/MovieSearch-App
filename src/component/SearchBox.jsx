export const SearchBox = function(props){

    return (
    <div>
        <input value={props.value} onChange={(event)=>{
            props.setSearch(event.target.value)
        }} placeholder="Search Here..."/>
    </div>
    )
}