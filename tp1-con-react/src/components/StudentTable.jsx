
import { HeaderStudent } from './HeaderStudent'
import { Search } from './Search'
import { Table } from './Table'
import PropTypes from "prop-types";


export const StudentTable = ({setContent}) => {
    return(
        <>
        <HeaderStudent setContent={setContent}/>
        <div className="container-table">
          <Search/>
          <Table/>
        </div>
        </>
    )
}
StudentTable.propTypes = {
    setContent:PropTypes.func
}