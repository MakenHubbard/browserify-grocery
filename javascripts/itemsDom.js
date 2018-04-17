const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) => {
  let domString = '';
  items.forEach((item) => {
    domString += `<div class="col-md-3 text-center item">
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <h3 class="panel-title">${item.name}</h3>
                      </div>
                      <div class="panel-body">
                        Panel content
                      </div>
                    </div>
                  </div>`;
  });
  return domString;
};

const printToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
};

module.exports = printToDom;
