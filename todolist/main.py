from fastapi import FastAPI,HTTPException

app=FastAPI()

items= []
@app.post("/items")
def create_item(item: str):
    items.append(item)
    return {"message": "Item created successfully"}

@app.get("/items")
def read_items():
    return {"items": items}

@app.get("/items/{item_id}")
def read_item(item_id: int):
   if item_id < len(items):
       return items[item_id]
   else:
       raise HTTPException(status_code=404, detail=f"Item with {item_id} not found")