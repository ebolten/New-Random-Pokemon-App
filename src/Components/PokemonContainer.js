import React from 'react'
//this will render a random pokemon

class PokemonContainer extends React.Component {

    render() {
        if (this.props.renderPoke) {
            return(
                <div>
                    <div class="hidden-sm hidden-xs">
                        <div className="card">
                            <h1 id='name'> {this.props.pokeObj['name'].toUpperCase()} </h1>
                            <img id='img-id' alt="front default Pokemon" src={this.props.pokeObj['sprites']['front_default']} />

                            <div className="container">
                            </div>
                        </div>
                        <br></br>
                        <button id='buttonTwo' onClick={this.props.handleBtn}> Click Here for Another Pokemon </button>
                    </div>
                    <div class="visible-sm visible-xs">
                        <div className="card-small">
                            <h1 id='name'> {this.props.pokeObj['name'].toUpperCase()} </h1>
                            <img id='img-id' alt="front default Pokemon" src={this.props.pokeObj['sprites']['front_default']} />

                            <div className="container">
                            </div>

                        </div>
                        <br></br>
                        <button id='buttonTwo' onClick={this.props.handleBtn}> Click Here for Another Pokemon </button>
                    </div>
                </div>
            )} else {
                return(
                    <div>
                        <h1>&#x2193; Generate a Random Pokemon &#x2193;</h1>
                        <button id='buttonText' onClick={this.props.handleBtn}> Click Here </button>
                    </div>
                )
            }
    }
}
export default PokemonContainer
