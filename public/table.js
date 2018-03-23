$(document).ready(() => {
  $.get( "http://localhost:1337/results", function( data ) {
    
    const messagesByFileName = data.map((response) => {
      const path = response.path.split('/');
      const fileName = path[path.length - 1];
      const results = JSON.parse(response.contents);
      
      return {
        fileName: fileName,
        results: results
      };
    });
    const amountOfMessages = messagesByFileName.reduce((total, msg, index, array) => {
      total += array[index].results.length;
      return total;
    }, 0);
    
    $('.white-token').append(`<h5 style="color:red">With WhiteSpaceTokenizer</h5><p>Total messages sent: ${amountOfMessages}</p>`);
    $('.heading').append(`<h5>These results are based on ${amountOfMessages * 2} messages</h5>`);
    const totalMatches = messagesByFileName.map((messageByFileName) => {
      return {
        fileName: messageByFileName.fileName,
        total: getTotalMatches(messageByFileName.results)
      };
    });

    
    const intentTypes = messagesByFileName.splice(1, 1).map((messageByFileName, index, arr) => {
      return [...new Set( messageByFileName.results.map(obj => obj.intent_type)) ];
    });
    
    const intentMatchesByIntentType = intentTypes[0].map((intentType) => {
      return messagesByFileName.map((messageByFileName) => {
        return {
          fileName: messageByFileName.fileName,
          intentType: intentType,
          total: getMatchesByIntentType(messageByFileName.results, intentType)
        }
      });
    });
    
    intentMatchesByIntentType.forEach((matches) => {
      matches.sort((a,b) => {return b.total-a.total;}).forEach((match, index) => {
        if (index == 0) {
          $('.white-token').append(`
            <div class="card" style="width: 45%;float:left;margin:2%;">
              <h4>Best setting</h4>
              <h5 class="card-header bg-primary">${match.intentType}</h5>
              <div class="card-body">
                <h5 class="card-title">${match.fileName}</h5>
                <p class="card-text">Total amount of matches: <span style="color: red">${match.total}<span></p>
              </div>
            </div>
          
          `);
        } else if(index == 1) {
          $('.white-token').append(`
            <div class="card" style="width: 45%;float:left;margin:2%;">
              <h4>Second best setting</h4>
              <h5 class="card-header bg-primary">${match.intentType}</h5>
              <div class="card-body">
                <h5 class="card-title">${match.fileName}</h5>
                <p class="card-text">Total amount of matches: <span style="color: red">${match.total}<span></p>
              </div>
            </div>
          
          `);
        }else if(index == 2) {
          $('.white-token').append(`
            <div class="card" style="width: 45%;float:left;margin:2%;">
              <h4>Third best setting</h4>
              <h5 class="card-header bg-primary">${match.intentType}</h5>
              <div class="card-body">
                <h5 class="card-title">${match.fileName}</h5>
                <p class="card-text">Total amount of matches: <span style="color: red">${match.total}<span></p>
              </div>
            </div>
          
          `);
        }else if(index == 3) {
          $('.white-token').append(`
            <div class="card" style="width: 45%;float:left;margin:2%;">
              <h4>Fourth best setting</h4>
              <h5 class="card-header bg-primary">${match.intentType}</h5>
              <div class="card-body">
                <h5 class="card-title">${match.fileName}</h5>
                <p class="card-text">Total amount of matches: <span style="color: red">${match.total}<span></p>
              </div>
            </div>
          `);
        }
      });
    });
  });
  
  /*$.get( "http://localhost:1337/results/simple", function( data ) {
    
    const messagesByFileName = data.map((response) => {
      const path = response.path.split('/');
      const fileName = path[path.length - 1];
      const results = JSON.parse(response.contents);
      
      return {
        fileName: fileName,
        results: results
      };
    });
    const amountOfMessages = messagesByFileName.reduce((total, msg, index, array) => {
      total += array[index].results.length;
      return total;
    }, 0);
    
    $('.simple-token').append(`<h5 style="color:red">With SimpleTokenizer</h5><p>Total messages sent: ${amountOfMessages}</p>`);
    
    const totalMatches = messagesByFileName.map((messageByFileName) => {
      return {
        fileName: messageByFileName.fileName,
        total: getTotalMatches(messageByFileName.results)
      };
    });

    
    const intentTypes = messagesByFileName.splice(1, 1).map((messageByFileName, index, arr) => {
      return [...new Set( messageByFileName.results.map(obj => obj.intent_type)) ];
    });
    
    const intentMatchesByIntentType = intentTypes[0].map((intentType) => {
      return messagesByFileName.map((messageByFileName) => {
        return {
          fileName: messageByFileName.fileName,
          intentType: intentType,
          total: getMatchesByIntentType(messageByFileName.results, intentType)
        }
      });
    });
    
    intentMatchesByIntentType.forEach((matches) => {
      matches.sort((a,b) => {return b.total-a.total;}).forEach((match, index) => {
        if (index == 0) {
          $('.simple-token').append(`
            <div class="card" style="width: 45%;float:left;margin:2%;">
              <h5 class="card-header bg-primary">${match.intentType}</h5>
              <div class="card-body">
                <h5 class="card-title">${match.fileName}</h5>
                <p class="card-text">Total amount of matches: <span style="color: red">${match.total}<span></p>
              </div>
            </div>
          
          `);
        }
      });
    });
  });*/
  
  function getTotalMatches(messageResultsByFileName) {
    return messageResultsByFileName.reduce((total, msg, index, array) => {
      if (array[index].intent_match) {
        total ++;
      }
      
      return total;
    }, 0);
  };
  
  function getMatchesByIntentType(messageResultsByFileName, intentType) {
    return messageResultsByFileName.reduce((total, msg, index, array) => {
      if (array[index].intent_type == intentType) {
        if (array[index].intent_match) {
          total++;
        }
      }
      return total;
    }, 0);
  };
});