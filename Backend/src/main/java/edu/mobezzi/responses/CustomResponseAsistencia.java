package edu.mobezzi.responses;

import edu.mobezzi.dao.AsistenciaDTO;

public class CustomResponseAsistencia implements CustomResponse<Response<AsistenciaDTO>> {

	private Response<AsistenciaDTO> response;
	
	public CustomResponseAsistencia(boolean error, String message, AsistenciaDTO asistencia) {
		this.response = new Response<AsistenciaDTO>(error, message, asistencia);
	}
	
	@Override
	public Response<AsistenciaDTO> getResponse() {
		return this.response;
	}
	
}
