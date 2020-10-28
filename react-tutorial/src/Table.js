import React from 'react'

const Table = (props) => {
    
    const {
        characterData,
        removeCharacter
    } = props;

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th></th>
                </tr>
            </thead>
        )
    };

    const TableBody = (props) => {
        const rows = props.characterData.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.job}</td>
                    <td>
                        <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    </td>
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
          <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }

export default Table