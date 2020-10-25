import React, {Component} from 'react'

class Table extends Component {
  render() {
    
    const {
        characterData
    } = this.props;
    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
        )
    };

    const TableBody = (props) => {
        const rows = props.characterData.map(data => {
            return (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.job}</td>
                </tr>
            )
        });

        return (
          <tbody>
              {rows}
          </tbody>
        )
      };


    return (
      <table>
          <TableHeader/>
          <TableBody characterData={characterData}/>
      </table>
    )
  }
}

export default Table