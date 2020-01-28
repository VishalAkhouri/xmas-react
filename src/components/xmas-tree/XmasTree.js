// function component or class component?
// function component since there is no state to be maintained

import React from 'react';

function XmasTree(props) {
    function getTreeStars(count) {
        let stars = '*';

        for (let j=0; j < count * 2; j++) {
            stars += '*';
        }
        return stars;
    }

    function getTreeStem(count) {
        let stem = [];
        for (let j=0; j < count; j++) {
            stem.push(<div>||||||||||||||||||</div>);
        }
        return stem;
    }

    function createTree() {
        let tree = [];
        let treeBody = [];
        for(let i=0; i < props.height; i++) {
            treeBody.push(<div>{getTreeStars(i)}</div>);
        }

        // add stem
        let stem = getTreeStem(props.stemHeight);

        tree = treeBody.concat(stem);
        return tree;
    }

    return (
        <React.Fragment>
            {createTree()}
        </React.Fragment>
    )
}

export default XmasTree;
