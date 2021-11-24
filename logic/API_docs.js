
const baseUrl = 'http://localhost:3001';


const uploadDocument = async (data) => { 
    const res = await fetch(
        `${baseUrl}/upload`,
        {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'application/pdf',
          },
        }
      );
    return await res.json();   
};

const getDocument = async (filename) => {
    const res = await fetch(
        `${baseUrl}/view/${filename}`,
        { method: 'GET'}
      );
      return await res.json();
};

const deleteDocument = async (filename) => {
    const res = await fetch(
        `${baseUrl}/del/${filename}`,
         { method: 'DELETE' }
    )
      const responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Deleted Successful');
      }    
};

const getAllDocuments = async (data) => {
    const res = await fetch(
        `${baseUrl}/documents`,
        { method: 'GET'}
      );
      return await res.json();
};




export default {uploadDocument, getDocument, getAllDocuments, deleteDocument};